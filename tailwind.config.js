/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
        // NGO-focused color palette based on logo
        'dream-forest-green': '#1e5f3a',
        'dream-forest-green-light': '#2d7a4f',
        'dream-forest-green-lighter': '#e8f5f0',
        'dream-sky-blue': '#2563eb',
        'dream-sky-blue-light': '#3b82f6',
        'dream-sky-blue-lighter': '#eff6ff',
        'dream-warm-orange': '#ea7317',
        'dream-warm-orange-light': '#f59e0b',
        'dream-warm-orange-lighter': '#fef3c7',
        'dream-deep-purple': '#5b21b6',
        'dream-deep-purple-light': '#7c3aed',
        'dream-deep-purple-lighter': '#f3e8ff',
        // Keep original colors for backward compatibility
        'dream-purple-darker': '#240e3a',
        'dream-purple-dark': '#3A0CA3',
        'dream-purple': '#7209B7',
        'dream-purple-light': '#B5179E',
        'dream-purple-lighter': '#f3e8ff',
        'dream-gold': '#F7B801',
        'dream-gold-light': '#FEEA00',
        'dream-gold-darker': '#d19b00',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};