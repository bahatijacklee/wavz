/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      // ─── SHADCN COMPAT ───────────────────────────────────────────────
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },

        // ─── WAVR DESIGN TOKENS ─────────────────────────────────────────
        'bg-primary':   'var(--ds-bg-primary)',
        'bg-secondary': 'var(--ds-bg-secondary)',
        'bg-elevated':  'var(--ds-bg-elevated)',
        'text-primary':   'var(--ds-text-primary)',
        'text-secondary': 'var(--ds-text-secondary)',
        'text-muted':     'var(--ds-text-muted)',
        'brand': {
          DEFAULT: 'var(--ds-brand-primary)',
          primary: 'var(--ds-brand-primary)',
          hover:   'var(--ds-brand-hover)',
          active:  'var(--ds-brand-active)',
          subtle:  'var(--ds-brand-subtle)',
        },
        'success':  'var(--ds-accent-success)',
        'warning':  'var(--ds-accent-warning)',
        'danger':   'var(--ds-accent-danger)',
        'tier-bronze':   '#CD7F32',
        'tier-silver':   '#94A3B8',
        'tier-gold':     '#F59E0B',
        'tier-platinum': '#A855F7',
        'tier-diamond':  '#3B82F6',
        'xp':     '#22C55E',
        'streak': '#F97316',
      },

      // ─── BORDER RADIUS ──────────────────────────────────────────────
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'ds-sm': '6px',
        'ds-md': '10px',
        'ds-lg': '14px',
        'ds-xl': '20px',
      },

      // ─── SPACING ────────────────────────────────────────────────────
      spacing: {
        'section-sm': '80px',
        'section-md': '120px',
        'section-lg': '160px',
        'card-sm': '16px',
        'card-md': '24px',
        'card-lg': '32px',
      },

      // ─── TYPOGRAPHY ─────────────────────────────────────────────────
      fontFamily: {
        satoshi:  ["'Satoshi'", 'sans-serif'],
        'dm-sans': ["'DM Sans'", 'sans-serif'],
        display:  ["'Satoshi'", 'sans-serif'],
        body:     ["'DM Sans'", 'sans-serif'],
      },

      fontSize: {
        'display': ['72px', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.03em' }],
        'h1':      ['48px', { lineHeight: '1.1',  fontWeight: '800', letterSpacing: '-0.025em' }],
        'h2':      ['36px', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h3':      ['24px', { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.015em' }],
        'h4':      ['18px', { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '1.6',  fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '1.55', fontWeight: '400' }],
        'caption': ['11px', { lineHeight: '1.45', fontWeight: '500', letterSpacing: '0.04em' }],
      },

      // ─── SHADOWS ────────────────────────────────────────────────────
      boxShadow: {
        'ds-sm':    '0 2px 8px rgba(0,0,0,0.25)',
        'ds-md':    '0 4px 24px rgba(0,0,0,0.40)',
        'ds-lg':    '0 8px 48px rgba(0,0,0,0.55)',
        'brand':    '0 0 0 1px #4F46E5, 0 8px 32px rgba(79,70,229,0.25)',
        'brand-sm': '0 0 0 1px rgba(79,70,229,0.5), 0 4px 16px rgba(79,70,229,0.2)',
        'xp':       '0 0 12px rgba(34,197,94,0.35)',
        'streak':   '0 0 12px rgba(249,115,22,0.35)',
        'glass':    'inset 0 0 0 1px rgba(255,255,255,0.06)',
      },

      // ─── TRANSITION ─────────────────────────────────────────────────
      transitionDuration: {
        'fast':   '150ms',
        'medium': '250ms',
        'slow':   '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out':    'cubic-bezier(0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ─── KEYFRAMES ──────────────────────────────────────────────────
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' }
        },
        'float-slow':   { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-18px)' } },
        'float-medium': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        'float-fast':   { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)'  } },
        'xp-rise':      { '0%': { transform: 'translateY(0)', opacity: '1' }, '100%': { transform: 'translateY(-60px)', opacity: '0' } },
        'fade-in-up':   { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'fade-in':      { from: { opacity: '0' }, to: { opacity: '1' } },
        'scale-in':     { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } },
        'slide-right':  { from: { opacity: '0', transform: 'translateX(24px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        'skeleton-shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-brand': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(79,70,229,0.4)' },
          '50%':       { boxShadow: '0 0 0 8px rgba(79,70,229,0)' },
        },
        'traveling-dot': {
          '0%':   { left: '0',    opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'float-slow':     'float-slow 6s ease-in-out infinite',
        'float-medium':   'float-medium 4.5s ease-in-out infinite',
        'float-fast':     'float-fast 3.5s ease-in-out infinite',
        'xp-rise':        'xp-rise 2.5s ease-out infinite',
        'fade-in-up':     'fade-in-up 0.6s ease-out forwards',
        'fade-in':        'fade-in 0.4s ease-out forwards',
        'scale-in':       'scale-in 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'slide-right':    'slide-right 0.4s ease-out forwards',
        'skeleton':       'skeleton-shimmer 1.8s linear infinite',
        'pulse-brand':    'pulse-brand 2s ease-in-out infinite',
        'traveling-dot':  'traveling-dot 3s linear infinite',
      },

      // ─── BACKGROUND IMAGES ──────────────────────────────────────────
      backgroundImage: {
        'mesh-brand':    'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,70,229,0.18) 0%, transparent 70%)',
        'mesh-success':  'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 70%)',
        'card-shine':    'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
        'skeleton-anim': 'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)',
      },
      backgroundSize: {
        'skeleton': '400% 100%',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};