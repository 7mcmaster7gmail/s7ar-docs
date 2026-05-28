interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantMap = {
  primary: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
  secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  success: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
  error: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
};

const sizeMap = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
};

export function Badge({
  variant = 'primary',
  size = 'md',
  children,
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full font-medium ${variantMap[variant]} ${sizeMap[size]}`}
    >
      {children}
    </span>
  );
}