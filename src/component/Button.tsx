import React from "react";
import Element = React.JSX.Element;
import cn from "classnames";

/**
 * Reusable Button component styled with Tailwind CSS.
 *
 * Props:
 * - children: Button label or inner content.
 * - onClick: Click handler function.
 * - type: Button HTML type attribute (button, submit, reset).
 * - disabled: Disable button state.
 * - variant: Visual style of the button (primary, secondary, danger, outline).
 * - size: Size of the button (sm, md, lg).
 * - className: Additional Tailwind classes for customization.
 */

type Variant = "primary" | "secondary" | "danger" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    variant?: Variant;
    size?: Size;
    className?: string;
}

const variantClasses: Record<Variant, string> = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline: "border border-gray-500 hover:bg-gray-100 text-gray-700",
};

const sizeClasses: Record<Size, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           type = "button",
                                           disabled = false,
                                           variant = "primary",
                                           size = "md",
                                           className = "",
                                       }: ButtonProps): Element =>
    (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={
                cn("font-semibold rounded-lg shadow",
                    variantClasses[variant],
                    sizeClasses[size],
                    disabled ? "opacity-50 cursor-not-allowed" : "",
                    className.replace(/\s+/g, ' ').trim()
                )}
        >
            {children}
        </button>
    );


export default Button;
