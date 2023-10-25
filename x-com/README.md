# NextJS Study 메모장

## layout.tsx vs template.tsx

-   layout은 정적으로 고정시켜두는 layout이고 template은 동적으로 data를 움직이는 layout이다.(보통 layout.tsx를 더욱 많이씀)

## css

-   tailwind => 호불호도 심하고 가독성이 안좋다
-   styled component => server component 즉 SSR에서 사용 불가
-   sass
-   css module
-   vanilla extract => Windows에서 호환성 문제로 안돌아감

### 즉 Next13에서는 sass 또는 css module을 사용해야함

<br/>

## page.module.css vs globals.css (css module)

page.module.css는 특정 page 또는 module에서 사용하는 css를 개별로 정의해두는 곳이며 globals.css는 project 전체에 적용되는 css를 정의해두는 곳이다.

## 폴더명 여러 규칙들(Routing Convention)

-   name : path, layout으로 반영이 되는 폴더(ex: login 폴더를 만들면 http://localhost:3000/login으로 접속하면 login 폴더 내 page.tsx를 그려준다.)

-   (name) : path, layout에는 관여를 안하고 간단하게 생각하면 특정 조건에 따른 그룹화를 한다고 생각하면될듯.(ex: login, admin 등)

-   @name : Parallel route로 layout에서 props로 children과 같이 받아와서 두개의 화면을 동시에 보여줄수 있다.(name은 props와 이름만 일치 시키면됨. 예시로 @modal로 만든 후 layout에서 props 매개변수 이름도 modal로 만들어주면된다. props type은 ReactNode)

    상세 : https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

-   (.)name : intercepting route로 주소가 name의 경로로 변경되었을때 실제 name의 결로에 있는 page.tsx가 화면을 control하지 않고 intercepting route의 page.tsx가 화면의 control을 intercepting해와서 보여주는 개념이라고 생각하면됨.

    추가로 실제 경로를 삭제하면 안됨 최초 접속시에는 intercepting을 하지만 새로고침 할때는 실제 경로로 접속을 하게되니 실제 경로에도 같은 내용의 동작을 구현해야함.

    상세 : https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes

-   \_name : path, route에 관여하지않는 private한 폴더이며 주로 폴더 정리용으로 쓰인다.(ex: component)

## redirection

-   client redirection은 useRouter의 replace or push를 사용
-   server redirection은 redirect 함수를 사용

## useSelectedLayoutSegment, useSelectedLayoutSegments

-   useSelectedLayoutSegment를 사용하면 http://localhost:3000/ 뒤에오는 최상위 경로 하나를 가져올 수 있음.(ex: http://localhost:3000/home에서 사용하면 home이 리턴되며 http://localhost:3000/compose/tweet 에서 사용하면 compose만 리턴됨)

-   useSelectedLayoutSegments를 사용하면 http://localhost:3000/ 뒤에오는 모든 경로를 Array형태로 가져올 수 있음.(ex: http://localhost:3000/compose/tweet 에서 사용하면 ["compose", "tweet"]이 리턴됨)

## client component가 부모일때 자식 component는 server component로 사용하는법

-   부모 Component에서 아래와 같이 children으로 server component를 받아오면됨
    ```HTML
    <article onClick={onClick} className={style.post}>
        {children}
    </article>
    ```
-   아래와 같이 import하여 사용하면 server component로 사용되지 않음
    ```HTML
    <article onClick={onClick} className={style.post}>
        <PostItem />
    </article>
    ```
