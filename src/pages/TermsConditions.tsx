import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, XCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the AURA Smart Pole platform, you accept and agree to be bound by these Terms and Conditions",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to modify these terms at any time",
        "Continued use of the service after changes constitutes acceptance of modified terms"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Responsibilities",
      content: [
        "You must provide accurate and complete information during registration",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You agree not to use the service for any unlawful or prohibited purpose",
        "You must not attempt to gain unauthorized access to any part of the service",
        "You are responsible for all activities that occur under your account"
      ]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Permitted Use",
      content: [
        "Use the service for lawful purposes only",
        "Access and monitor data from authorized AURA Smart Poles",
        "Generate reports and analytics from collected data",
        "Configure and manage your smart pole installations",
        "Collaborate with authorized team members and stakeholders"
      ]
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: [
        "Attempting to hack, reverse engineer, or compromise the system",
        "Using automated tools to access the service without authorization",
        "Uploading malicious code, viruses, or harmful software",
        "Interfering with or disrupting the service or servers",
        "Violating any applicable laws or regulations",
        "Impersonating others or providing false information"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "All content, features, and functionality are owned by TruVibe Technology Pvt Ltd",
        "AURA trademarks, logos, and service marks are protected",
        "You may not copy, modify, or distribute our intellectual property without permission",
        "User-generated content remains your property, but you grant us a license to use it",
        "We respect intellectual property rights and expect users to do the same"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "The service is provided \"as is\" without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our liability is limited to the amount paid for the service in the past 12 months",
        "We do not guarantee uninterrupted or error-free service",
        "You use the service at your own risk"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Scale className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using the AURA Smart Pole platform.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last Updated: November 11, 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Agreement to Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you and TruVibe Technology Pvt Ltd ("Company," "we," "us," or "our") concerning your access to and use of the AURA AI Smart Pole platform and related services.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access the service.
            </p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-secondary flex-1">{section.title}</h2>
              </div>
              <ul className="space-y-3 ml-16">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto space-y-8 mb-12"
        >
          {/* Service Availability */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Service Availability</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We strive to provide continuous, uninterrupted service. However, we do not guarantee that the service will be available at all times or that it will be error-free. We reserve the right to:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>Modify or discontinue any part of the service</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>Perform scheduled maintenance and updates</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>Suspend service for technical or security reasons</span>
              </li>
            </ul>
          </div>

          {/* Payment Terms */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Payment Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you purchase a paid subscription:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>All fees are in the currency specified at the time of purchase</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>Payments are non-refundable except as required by law</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>Subscription automatically renews unless canceled</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>We may change pricing with 30 days notice</span>
              </li>
            </ul>
          </div>

          {/* Termination */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Account Termination</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>Your right to use the service will immediately cease</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>We may delete your account and associated data</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0" />
                <span>You remain liable for all charges incurred before termination</span>
              </li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or the service shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Changes to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="glass-card p-8 rounded-2xl border-2 border-secondary/20">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-foreground/80">
              <p><strong className="text-secondary">Company:</strong> TruVibe Technology Pvt Ltd</p>
              <p><strong className="text-secondary">Email:</strong> legal@truvibe.tech</p>
              <p><strong className="text-secondary">Address:</strong> India</p>
            </div>
          </div>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 neon-glow"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Homepage
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 backdrop-blur-xl bg-background/80 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 TruVibe Technology Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsConditions;
