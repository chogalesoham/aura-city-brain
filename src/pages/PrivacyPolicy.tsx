import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Device and browser information",
        "Usage data and analytics",
        "Location data (with your consent)",
        "Cookies and similar tracking technologies"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our AURA Smart Pole services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information to improve our services",
        "To monitor the usage of our services",
        "To detect, prevent and address technical issues"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmissions are encrypted using SSL/TLS protocols",
        "Regular security audits and vulnerability assessments",
        "Strict access controls and authentication mechanisms",
        "Secure data storage with encryption at rest"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Right to access your personal data",
        "Right to rectify inaccurate information",
        "Right to erasure (right to be forgotten)",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Data Retention",
      content: [
        "We retain personal data only for as long as necessary",
        "Data is stored according to legal and regulatory requirements",
        "Automatic deletion of inactive accounts after 2 years",
        "Secure disposal of data when no longer needed",
        "Regular review of data retention policies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how AURA collects, uses, and protects your personal information.
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
            <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              TruVibe Technology Pvt Ltd ("we," "our," or "us") operates the AURA AI Smart Pole platform. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              By using our service, you agree to the collection and use of information in accordance with this policy. We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
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
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-primary flex-1">{section.title}</h2>
              </div>
              <ul className="space-y-3 ml-16">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
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
          {/* Third-Party Services */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Services</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Privacy Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact Information */}
          <div className="glass-card p-8 rounded-2xl border-2 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-foreground/80">
              <p><strong className="text-primary">Company:</strong> TruVibe Technology Pvt Ltd</p>
              <p><strong className="text-primary">Email:</strong> privacy@truvibe.tech</p>
              <p><strong className="text-primary">Address:</strong> India</p>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 neon-glow"
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

export default PrivacyPolicy;
