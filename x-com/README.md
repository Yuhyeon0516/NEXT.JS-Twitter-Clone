# layout.tsx vs template.tsx

layout은 정적으로 고정시켜두는 layout이고 template은 동적으로 data를 움직이는 layout이다.(보통 layout.tsx를 더욱 많이씀)

# css

tailwind => 호불호도 심하고 가독성이 안좋다
styled component => server component 즉 SSR에서 사용 불가
sass
css module
vanilla extract => Windows에서 호환성 문제로 안돌아감

즉 NEXT13에서는 sass 또는 css module을 사용해야함

# page.module.css vs globals.css

page.module.css는 특정 page 또는 module에서 사용하는 css를 개별로 정의해두는 곳이며 globals.css는 project 전체에 적용되는 css를 정의해두는 곳이다.
