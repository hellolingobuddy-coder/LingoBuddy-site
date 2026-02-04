"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bird, CreditCard, Lock, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SubscribePage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  // Format expiry as MM/YY
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  // Luhn algorithm to validate card number
  const validateCardNumber = (number: string) => {
    const digits = number.replace(/\s/g, "")
    if (digits.length < 13 || digits.length > 19) return false
    
    let sum = 0
    let isEven = false
    
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits[i], 10)
      
      if (isEven) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }
      
      sum += digit
      isEven = !isEven
    }
    
    return sum % 10 === 0
  }

  // Validate expiry date
  const validateExpiry = (expiry: string) => {
    const parts = expiry.split("/")
    if (parts.length !== 2) return false
    
    const month = parseInt(parts[0], 10)
    const year = parseInt("20" + parts[1], 10)
    
    if (month < 1 || month > 12) return false
    
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() + 1
    
    if (year < currentYear) return false
    if (year === currentYear && month < currentMonth) return false
    
    return true
  }

  // Validate CVC
  const validateCVC = (cvc: string) => {
    return /^\d{3,4}$/.test(cvc)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!cardholderName.trim()) {
      newErrors.cardholderName = "Cardholder name is required"
    }
    
    if (!cardNumber) {
      newErrors.cardNumber = "Card number is required"
    } else if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = "Invalid card number"
    }
    
    if (!expiry) {
      newErrors.expiry = "Expiry date is required"
    } else if (!validateExpiry(expiry)) {
      newErrors.expiry = "Invalid or expired date (MM/YY)"
    }
    
    if (!cvc) {
      newErrors.cvc = "CVC is required"
    } else if (!validateCVC(cvc)) {
      newErrors.cvc = "Invalid CVC (3-4 digits)"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      
      // Redirect to app after success
      setTimeout(() => {
        window.location.href = "https://studio.code.org/projects/applab/c469bc7e-da92-4268-a5a9-f91596999aa3"
      }, 2000)
    }, 2000)
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    if (formatted.replace(/\s/g, "").length <= 16) {
      setCardNumber(formatted)
    }
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace("/", "")
    if (value.length <= 4) {
      setExpiry(formatExpiry(value))
    }
  }

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    if (value.length <= 4) {
      setCvc(value)
    }
  }

  // Detect card type from number
  const getCardType = (number: string) => {
    const digits = number.replace(/\s/g, "")
    if (digits.startsWith("4")) return "Visa"
    if (/^5[1-5]/.test(digits)) return "Mastercard"
    if (/^3[47]/.test(digits)) return "Amex"
    if (/^6(?:011|5)/.test(digits)) return "Discover"
    return null
  }

  const cardType = getCardType(cardNumber)

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 p-4">
        <Card className="w-full max-w-md text-center shadow-xl">
          <CardContent className="p-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">Payment Successful!</h2>
            <p className="mb-4 text-muted-foreground">
              Thank you for subscribing to LingoBuddy Premium!
            </p>
            <p className="text-sm text-muted-foreground">Redirecting to the app...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 p-4 py-8">
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <Link href="/" className="mx-auto mb-4 inline-flex items-center justify-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400">
              <Bird className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">LingoBuddy</span>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Order Summary */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>LingoBuddy Premium Subscription</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">LingoBuddy Premium</span>
                  <span className="font-bold text-blue-600">$9.50/month</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Billed monthly, cancel anytime</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">What's included:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Access to all 4 languages",
                    "Unlimited lessons & exercises",
                    "Native speaker audio",
                    "Cultural immersion content",
                    "24/7 support",
                    "Certificate upon completion",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">$9.50</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Details
              </CardTitle>
              <CardDescription>Choose your payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method Selection */}
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-4">
                  <Label
                    htmlFor="card"
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-4 transition-colors ${
                      paymentMethod === "card" ? "border-blue-500 bg-blue-50" : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value="card" id="card" className="sr-only" />
                    <CreditCard className="mb-2 h-6 w-6" />
                    <span className="text-sm font-medium">Card</span>
                  </Label>
                  <Label
                    htmlFor="paypal"
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-4 transition-colors ${
                      paymentMethod === "paypal" ? "border-blue-500 bg-blue-50" : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
                    <span className="mb-2 text-lg font-bold text-[#003087]">P</span>
                    <span className="text-sm font-medium">PayPal</span>
                  </Label>
                  <Label
                    htmlFor="apple"
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-4 transition-colors ${
                      paymentMethod === "apple" ? "border-blue-500 bg-blue-50" : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value="apple" id="apple" className="sr-only" />
                    <span className="mb-2 text-lg">🍎</span>
                    <span className="text-sm font-medium">Apple Pay</span>
                  </Label>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    {/* Cardholder Name */}
                    <div className="space-y-2">
                      <Label htmlFor="cardholderName">Cardholder Name</Label>
                      <Input
                        id="cardholderName"
                        placeholder="John Doe"
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.target.value)}
                        className={errors.cardholderName ? "border-red-500" : ""}
                      />
                      {errors.cardholderName && (
                        <p className="flex items-center gap-1 text-sm text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          {errors.cardholderName}
                        </p>
                      )}
                    </div>

                    {/* Card Number */}
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className={`pr-16 ${errors.cardNumber ? "border-red-500" : ""}`}
                        />
                        {cardType && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
                            {cardType}
                          </span>
                        )}
                      </div>
                      {errors.cardNumber && (
                        <p className="flex items-center gap-1 text-sm text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>

                    {/* Expiry and CVC */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={handleExpiryChange}
                          className={errors.expiry ? "border-red-500" : ""}
                        />
                        {errors.expiry && (
                          <p className="flex items-center gap-1 text-sm text-red-500">
                            <AlertCircle className="h-3 w-3" />
                            {errors.expiry}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          value={cvc}
                          onChange={handleCvcChange}
                          className={errors.cvc ? "border-red-500" : ""}
                        />
                        {errors.cvc && (
                          <p className="flex items-center gap-1 text-sm text-red-500">
                            <AlertCircle className="h-3 w-3" />
                            {errors.cvc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="rounded-lg bg-muted/50 p-6 text-center">
                    <p className="text-muted-foreground">
                      You will be redirected to PayPal to complete your payment.
                    </p>
                  </div>
                )}

                {paymentMethod === "apple" && (
                  <div className="rounded-lg bg-muted/50 p-6 text-center">
                    <p className="text-muted-foreground">
                      Click the button below to pay with Apple Pay.
                    </p>
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    "Processing..."
                  ) : (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Pay $9.50
                    </>
                  )}
                </Button>

                <p className="flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  Your payment information is secure and encrypted
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
