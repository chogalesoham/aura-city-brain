import { motion } from "framer-motion";
import React from "react";

type Props = {
  title: string;
  description: string;
  Icon: React.ComponentType<any>;
};

const ProductFeatureCard: React.FC<Props> = ({ title, description, Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass-card p-6 rounded-lg transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center">
          <Icon size={20} className="text-primary" aria-hidden />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-foreground/70 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFeatureCard;
