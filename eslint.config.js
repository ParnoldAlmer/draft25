import js from '@eslint/js';
import html from 'eslint-plugin-html';

export default [
  js.configs.recommended,
  {
    files: ['**/*.html'],
    plugins: {
      html
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        setInterval: 'readonly',
        setTimeout: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        Event: 'readonly',
        
        // Our custom functions that are defined in the HTML
        loadPlayerData: 'readonly',
        renderPlayers: 'readonly',
        filterPlayers: 'readonly',
        searchPlayers: 'readonly',
        showChangelog: 'readonly',
        closeChangelog: 'readonly',
        showCombineModal: 'readonly',
        closeCombineModal: 'readonly',
        updateCountdown: 'readonly',
        
        // Our global variables
        players: 'writable',
        currentFilter: 'writable',
        changelogData: 'readonly'
      }
    },
    rules: {
      // Critical syntax rules that would catch our 40yard issue
      'dot-notation': 'error', // This would have caught our 40yard issue!
      'no-undef': 'error',
      'semi': ['error', 'always'],
      'no-unreachable': 'error',
      
      // Relax rules for inline HTML JavaScript
      'no-unused-vars': 'off', // Many functions used in HTML event handlers
      'no-console': 'off', // Allow console.log for debugging
      'no-redeclare': 'off', // Functions are defined globally in HTML context
      'no-use-before-define': 'off', // Function hoisting is normal in HTML
      'no-implicit-globals': 'off', // HTML context requires global functions
      'quotes': 'off', // Mixed quotes in template literals
      'prefer-const': 'off', // Let vs const less critical here
      'no-var': 'off' // Focus on syntax errors first
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    }
  }
];