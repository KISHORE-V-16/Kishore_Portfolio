import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, Phone, MapPin, Linkedin, Github, Download, Send, Loader2, Sparkles,
  MessageCircle, AtSign, Globe, Share2, Inbox, Bell
} from 'lucide-react';

// --- IMPORT YOUR RESUME HERE ---
// Ensure the file is inside 'client/src/assets/' and named correctly
import resumeFile from '../../assets/resume.pdf'; 

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kishore16a03@gmail.com',
    href: 'mailto:kishore16a03@gmail.com',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9790306080',
    href: 'tel:+919790306080',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kishore-v-835047265/',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/KISHORE-V-16',
    gradient: 'from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600',
  },
];

// --- HELPER FOR FLOATING BACKGROUND ITEMS ---
function FloatingItem({ children, className, delay = '0s' }: { children: React.ReactNode, className: string, delay?: string }) {
    return (
      <div className={`absolute ${className} animate-float`} style={{ animationDelay: delay }}>
         {children}
      </div>
    );
}

// --- DISTRIBUTED BACKGROUND: STANDARD ICONS ---
function ContactBackgroundIcons() {
    const strokeW = 1.5;
    const baseClasses = "text-zinc-800/30"; 

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Header Area */}
            <FloatingItem className="top-[5%] left-[8%] -rotate-12" delay="0s">
                <MessageCircle className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[10%] right-[10%] rotate-12" delay="1s">
                <AtSign className={`w-24 h-24 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Middle Section */}
            <FloatingItem className="top-[35%] left-[2%] rotate-6" delay="2s">
                <Send className={`w-16 h-16 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[45%] right-[5%] -rotate-6" delay="2.5s">
                <Inbox className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Bottom Area */}
            <FloatingItem className="top-[70%] left-[5%] rotate-12" delay="3s">
                <Globe className={`w-28 h-28 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[75%] right-[5%] -rotate-12" delay="3.5s">
                <Share2 className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
             <FloatingItem className="top-[92%] left-[45%] rotate-45" delay="4s">
                <Bell className={`w-16 h-16 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
        </div>
    );
}

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // --- HANDLER: PROFESSIONAL MAIL CONFIGURATION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kishore16a03@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          // 1. The Actual Data
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.subject, // Passed as data for the body

          // 2. Professional Formatting Options
          _template: "box", // Replaces "table" with a clean, professional box design
          _subject: `New Portfolio Inquiry: ${formData.subject} (from ${formData.name})`, // Makes your inbox subject line clear and professional
          _autoresponse: "Thank you for reaching out! I have received your message and will get back to you shortly. — Kishore V", // Professional auto-reply to them
          _captcha: "false"
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      toast({
        title: 'Message sent!',
        description: "Thank you! I'll get back to you soon.",
        className: "bg-green-600 text-white border-none"
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: 'Error sending message',
        description: 'Something went wrong. Please email me directly.',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={ref} id="contact" className="relative py-24 px-6 overflow-hidden bg-black" data-testid="section-contact">
      
      <ContactBackgroundIcons />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
            <div className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <Badge className="relative bg-black text-white px-6 py-2 rounded-full border border-white/10 text-sm tracking-wide uppercase">
                        <Mail className="w-4 h-4 mr-2 text-pink-400" />
                        Contact
                    </Badge>
                </div>
            </div>

          <h2 className={`mt-8 text-3xl md:text-5xl font-bold tracking-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-testid="text-contact-title">
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className={`mt-4 text-zinc-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-testid="text-contact-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* --- CONTACT FORM --- */}
          <Card
            className={`relative overflow-hidden p-8 transition-all duration-700 bg-[#0F0F10] border-zinc-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            data-testid="card-contact-form"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-violet-500/10 rounded-full blur-3xl opacity-50" />
            
            <div className="relative">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-pink-500 focus:ring-pink-500/20"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-pink-500 focus:ring-pink-500/20"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-zinc-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-pink-500 focus:ring-pink-500/20"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zinc-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-pink-500 focus:ring-pink-500/20"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white shadow-lg shadow-pink-500/20 border-0"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Card>

          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* --- CONTACT INFO CARD --- */}
            <Card className="relative overflow-hidden p-8 bg-[#0F0F10] border-zinc-800" data-testid="card-contact-info">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-50" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-500">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium text-white hover:text-violet-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* --- SOCIAL LINKS CARD --- */}
            <Card className="relative overflow-hidden p-8 bg-[#0F0F10] border-zinc-800" data-testid="card-social">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl opacity-50" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-6">Connect</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${link.gradient} text-white shadow-lg hover:scale-105 transition-transform`}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* --- FIXED DOWNLOAD BUTTON (Using Import) --- */}
            <a
              href={resumeFile} // Using the imported file
              download="Kishore_V_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 hover:border-violet-500 hover:bg-violet-500/10 text-zinc-300 hover:text-white h-9 px-4 py-6 bg-zinc-900/50 shadow-sm"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-tilt { animation: tilt 10s infinite linear; }
      `}</style>
    </section>
  );
}