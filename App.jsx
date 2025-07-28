import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Gift, Star, Upload, Phone, MessageCircle, Mail, Trophy, Sparkles, Flag, Heart } from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cnic: '',
    amount: '',
    paymentMethod: '',
    uploadedFile: null
  })
  const [ticketNumber, setTicketNumber] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const fileInputRef = useRef(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFormData(prev => ({ ...prev, uploadedFile: file }))
    }
  }

  const generateTicketNumber = () => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000)
    return `PK2025-${timestamp.toString().slice(-6)}-${random.toString().padStart(3, '0')}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.amount && formData.paymentMethod && formData.uploadedFile) {
      const newTicketNumber = generateTicketNumber()
      setTicketNumber(newTicketNumber)
      setShowConfirmation(true)
      // Reset form
      setFormData({
        name: '',
        phone: '',
        cnic: '',
        amount: '',
        paymentMethod: '',
        uploadedFile: null
      })
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center text-white relative">
        <div className="hero-content text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Flag className="w-16 h-16 text-white flag-wave" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fireworks-animation">
            🎉 Celebrate Independence Day 2025!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Buy a Mystery Box or Lucky Draw Ticket – Starting from just ₨500!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-800 hover:bg-green-50 text-lg px-8 py-4"
              onClick={() => scrollToSection('tickets')}
            >
              <Gift className="mr-2 h-5 w-5" />
              Buy Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4"
              onClick={() => scrollToSection('prizes')}
            >
              <Trophy className="mr-2 h-5 w-5" />
              View Prizes
            </Button>
          </div>
        </div>
      </section>

      {/* Lucky Draw Details */}
      <section id="prizes" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              <Star className="inline mr-2" />
              Lucky Draw Prizes
            </h2>
            <p className="text-lg text-gray-600">Amazing prizes waiting for you!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="ticket-card">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-green-800">1st Prize</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-green-600 mb-2">iPhone 15 Pro</p>
                <p className="text-gray-600">Latest model with all accessories</p>
              </CardContent>
            </Card>

            <Card className="ticket-card">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <CardTitle className="text-green-800">2nd Prize</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-green-600 mb-2">Samsung Galaxy Watch</p>
                <p className="text-gray-600">Ultra series smartwatch</p>
              </CardContent>
            </Card>

            <Card className="ticket-card">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-green-800">3rd Prize</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-green-600 mb-2">₨50,000 Voucher</p>
                <p className="text-gray-600">Shopping voucher for any store</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Draw Date: August 14, 2025</h3>
            <p className="text-green-600">Each ticket = 1 entry • Enhanced system generates unique ticket numbers</p>
          </div>
        </div>
      </section>

      {/* Mystery Box Offers */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              <Gift className="inline mr-2" />
              Mystery Box Offers
            </h2>
            <p className="text-lg text-gray-600">Choose your mystery box and discover exciting surprises!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="mystery-box">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Box 1</CardTitle>
                <CardDescription className="text-3xl font-bold text-green-600">₨500</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gift vouchers worth ₨300-800</li>
                  <li>• Surprise accessories</li>
                  <li>• Digital codes</li>
                  <li>• Guaranteed value</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mystery-box border-green-500 border-2">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-green-600">Most Popular</Badge>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Box 2</CardTitle>
                <CardDescription className="text-3xl font-bold text-green-600">₨1000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gift vouchers worth ₨800-1500</li>
                  <li>• Premium accessories</li>
                  <li>• Cash vouchers</li>
                  <li>• Exclusive items</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mystery-box">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Box 3</CardTitle>
                <CardDescription className="text-3xl font-bold text-green-600">₨1500</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gift vouchers worth ₨1200-2500</li>
                  <li>• Luxury items</li>
                  <li>• High-value codes</li>
                  <li>• Premium surprises</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">How to Buy</h2>
            <p className="text-lg text-gray-600">Simple 4-step process to get your tickets</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Choose</h3>
              <p className="text-gray-600">Select Lucky Draw Ticket or Mystery Box</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Pay</h3>
              <p className="text-gray-600">Send payment via EasyPaisa or JazzCash</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Upload</h3>
              <p className="text-gray-600">Upload payment proof screenshot</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Receive</h3>
              <p className="text-gray-600">Get confirmation and ticket number</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section id="tickets" className="py-16 px-4 bg-green-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              <Upload className="inline mr-2" />
              Upload Payment Proof
            </h2>
            <p className="text-lg text-gray-600">Fill the form below to get your ticket</p>
          </div>

          <Card className="form-section">
            <CardHeader>
              <CardTitle className="text-green-800">Payment Information</CardTitle>
              <CardDescription>
                Send payment to: <strong>EasyPaisa: 03XX-XXXXXXX</strong> or <strong>JazzCash: 03XX-XXXXXXX</strong>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="03XX-XXXXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cnic">CNIC (Optional)</Label>
                  <Input
                    id="cnic"
                    value={formData.cnic}
                    onChange={(e) => handleInputChange('cnic', e.target.value)}
                    placeholder="XXXXX-XXXXXXX-X"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Amount Paid *</Label>
                    <Select onValueChange={(value) => handleInputChange('amount', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">₨500 - Mystery Box 1</SelectItem>
                        <SelectItem value="1000">₨1000 - Mystery Box 2</SelectItem>
                        <SelectItem value="1500">₨1500 - Mystery Box 3</SelectItem>
                        <SelectItem value="100">₨100 - Lucky Draw Ticket</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="payment-method">Payment Method *</Label>
                    <Select onValueChange={(value) => handleInputChange('paymentMethod', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easypaisa">EasyPaisa</SelectItem>
                        <SelectItem value="jazzcash">JazzCash</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="screenshot">Upload Payment Screenshot *</Label>
                  <div className="upload-area p-6 rounded-lg text-center mt-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="screenshot"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="mb-2"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Choose File
                    </Button>
                    {formData.uploadedFile && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {formData.uploadedFile.name}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      Upload a clear screenshot of your payment confirmation
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                  Submit & Get Ticket Number
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-green-800">Payment Received!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-4">Your ticket number is:</p>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-green-800">{ticketNumber}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                You will receive confirmation via WhatsApp/SMS shortly.
              </p>
              <Button 
                onClick={() => setShowConfirmation(false)}
                className="bg-green-600 hover:bg-green-700"
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">How many tickets can I buy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">You can buy unlimited tickets and mystery boxes. Each purchase gives you a separate ticket number.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">When is the draw?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The lucky draw will be held on August 14, 2025 (Pakistan Independence Day) at 8:00 PM PKT.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">How will I receive my prize?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Winners will be contacted via phone/WhatsApp. Prizes will be delivered to your address or can be collected from our office.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Are Mystery Boxes refundable?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Mystery boxes are non-refundable. However, all boxes contain items worth more than the purchase price.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 px-4 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact & Support</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-green-100">+92 3XX-XXXXXXX</p>
              <Button variant="outline" className="mt-2 border-white text-white hover:bg-white hover:text-green-800">
                Chat Now
              </Button>
            </div>
            
            <div>
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-green-100">support@independenceday2025.pk</p>
              <Button variant="outline" className="mt-2 border-white text-white hover:bg-white hover:text-green-800">
                Send Email
              </Button>
            </div>
            
            <div>
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-green-100">042-XXXXXXXX</p>
              <Button variant="outline" className="mt-2 border-white text-white hover:bg-white hover:text-green-800">
                Call Now
              </Button>
            </div>
          </div>

          <Separator className="my-8 bg-green-600" />
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" className="text-white hover:bg-green-700">Facebook</Button>
            <Button variant="ghost" className="text-white hover:bg-green-700">Instagram</Button>
            <Button variant="ghost" className="text-white hover:bg-green-700">Twitter</Button>
          </div>

          <p className="text-green-100">
            © 2025 Pakistan Independence Day Lucky Draw. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App

