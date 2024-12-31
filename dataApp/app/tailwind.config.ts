import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'basic': '#8B5CF6',
				'standard': '#141A2A',
				'basic-100': '#786FFE',
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
