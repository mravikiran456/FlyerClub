module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    screens: {
      'xs': '250px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
    }, 
    fontFamily:{
      sans : ['poppins']
    },
    extend: {
      colors:{
        purple: '#5a68c2',
        warningRed:'#ff9a9a',
        red : '#F0404C',
        yarrow : '#fdcb6e',
        violet : '#DF99CA',
        green : '#7CF29C',
        gray : '#F2F4F7',
        textGray : '#595959',
        titleHeader: '#404857',
        statsBackground: '#f6f8fc',
        header: '#404857',
        border: '#e4e7ea',
        purpleFrom: 'rgba(85,41,198,1)',
        purpleBtw: 'rgba(124,69,214,1)',
        purpleTo: 'rgba(158,92,226,1)',
        light: '#595959',
        textBackground: '#cdaaf0',
        blacktransperant: 'rgba(0,0,0,0.65)'
        // gradient: 'linear-gradient(90deg, rgba(85,41,198,1) 0%, rgba(124,69,214,1) 35%, rgba(158,92,226,1) 100%);'
      },
      height:{
        'h-1/6': '10.666667%',
        'h-2/6': '34.333333%',
        'h-3/6': '54%'
      },
      boxShadow:{
        'custom' : '0 4px 12px #5a68c24d',
        'button' : '0 10px 25px rgb(158 92 226 / 50%)',
        'orange-button' : '0 10px 25px rgb(255 221 153 / 50%)'
      },
      backgroundImage:{
        'banner': "url('/src/assets/images/grid/bannernew.png')",
        'bannerHeader': "url('/src/assets/images/grid/headerbanner.svg')",
        'signup': "url('/src/assets/images/bg-signup.svg')",
        'bannerdark': "url('/src/assets/images/background.png')",
        'collection': "url('/src/assets/images/collection.svg')",
        'bannerleft': "url('/src/assets/images/1.png')",
        'bannerright': "url('/src/assets/images/secondright.png')",
      },
    },
  },
  plugins: [],
}
