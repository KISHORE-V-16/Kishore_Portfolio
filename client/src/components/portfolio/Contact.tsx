import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, Loader2, Sparkles } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tp@nitt.edu',
    href: 'mailto:tp@nitt.edu',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-431-2501081',
    href: 'tel:+914312501081',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'NIT Trichy, Tamil Nadu, India',
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
    href: 'https://github.com/kishorev',
    gradient: 'from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600',
  },
];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={ref} id="contact" className="relative py-24 px-6 overflow-hidden" data-testid="section-contact">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-500/5 to-background" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white border-0" data-testid="badge-contact">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
            <span className="text-foreground">Get in </span>
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-contact-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card
            className={`relative overflow-hidden p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            data-testid="card-contact-form"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-500/5" />
            
            <div className="relative">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none bg-background/50"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white shadow-lg shadow-pink-500/25"
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
            <Card className="relative overflow-hidden p-8" data-testid="card-contact-info">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              
              <div className="relative">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-violet-400 transition-colors"
                            data-testid={`link-contact-${item.label.toLowerCase()}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden p-8" data-testid="card-social">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
              
              <div className="relative">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${link.gradient} text-white shadow-lg hover:scale-105 transition-transform`}
                      data-testid={`link-social-${link.label.toLowerCase()}`}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            <Button
              variant="outline"
              className="w-full border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 py-6"
              onClick={() => {
                toast({
                  title: 'Resume Download',
                  description: 'Resume download will be available soon.',
                });
              }}
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
