type SVGProps = {
  className?: string;
  style?: import('react').CSSProperties;
};

type SVGComponent<T = Record<string, unknown>> = import('react').FC<SVGProps & T>;
