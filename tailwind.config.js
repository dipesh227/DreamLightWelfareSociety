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
					DEFAULT: 'hsl(var(--dream-logo-blue))', // Mapped to new blue
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--dream-logo-yellow))', // Mapped to new yellow
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
        'dream-forest': {
          'green': 'hsl(var(--dream-forest-green))',
          'light': 'hsl(var(--dream-forest-green-light))',
          'lighter': 'hsl(var(--dream-forest-green-lighter))'
        },
        'dream-sky': {
          'blue': 'hsl(var(--dream-sky-blue))',
          'light': 'hsl(var(--dream-sky-blue-light))',
          'lighter': 'hsl(var(--dream-sky-blue-lighter))'
        },
        'dream-warm': {
          'orange': 'hsl(var(--dream-warm-orange))',
          'light': 'hsl(var(--dream-warm-orange-light))',
          'lighter': 'hsl(var(--dream-warm-orange-lighter))'
        },
        'dream-deep': {
          'purple': 'hsl(var(--dream-deep-purple))',
          'light': 'hsl(var(--dream-deep-purple-light))',
          'lighter': 'hsl(var(--dream-deep-purple-lighter))'
        },
        // New logo colors
        'dream-logo': {
          'blue': 'hsl(var(--dream-logo-blue))',
          'blue-light': 'hsl(var(--dream-logo-blue-light))',
          'blue-dark': 'hsl(var(--dream-logo-blue-dark))',
          'yellow': 'hsl(var(--dream-logo-yellow))',
          'yellow-light': 'hsl(var(--dream-logo-yellow-light))',
          'yellow-dark': 'hsl(var(--dream-logo-yellow-dark))',
        },
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