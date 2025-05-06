import React from "react";
import cn  from "classnames";

/**
 * Reusable Card component styled with Tailwind CSS using cn helper.
 *
 * Props:
 * - title: Card title.
 * - description: Card content text.
 * - imageUrl: Optional image URL to display at top.
 * - footer: Optional footer content or actions (e.g., buttons).
 * - className: Additional Tailwind classes for customization.
 */

interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    footer?: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({
                                       title,
                                       description,
                                       imageUrl,
                                       footer,
                                       className,
                                   }) => {
    return (
        <div
            className={cn(
                "bg-white rounded-2xl shadow-md overflow-hidden flex flex-col",
                className
            )}
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4 flex-1">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                {description && (
                    <p className="text-gray-600 text-base">{description}</p>
                )}
            </div>
            {footer && (
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
