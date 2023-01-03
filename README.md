
## App directory

기본적으로 `app` 폴더에 있는 컴포넌트는 `React Server Component`다.

그러나 `Client Components`도 사용가능하다.

- routes 설정할때 쓰인다.

- app안의 page들은 기본적으로 server component인데 Client Component로 세팅을 할 수 있다.


<br>

## Layouts

여러 페이지에 공유되는 UI.

- 가장 top, Root Layout은 html, body 태그를 가져야 함.

- route segment는 옵셔널하게 자신만의 Layout을 가질 수 있다.

- 마찬가지로 Layouts는 기본적으로 server component, Client Component로 세팅가능.

- parent layout과 children은 데이터 passing 불가하지만, 같은 데이터를 한번 더 fetch할 수 있다.
    react가 자동으로 성능 최적화를 한다. (자동으로 중복 요청을 제거한다고 쓰임.)

- 같은 폴더의 layout, page 정의될 수 있고 layout이 page 덮는다.

<br>

## Root Layout (Required)

app directory의 최상단.

모든 라우트에 적용됨.



#### good to know

- app 디렉토리는 layout을 꼭 가져야 함.

- 루트 layout은 html, body태그 꼭 있어야 함. 자동으로 안만들어줌.

- head 파일은 head HTML elements를 관리하는 특별 파일이다. <title>같은.

- (marketing), (shop) 안에 layout.js를 만들어 multiple root layouts를 만들 수 있다.

- layout은 Server Component이고 **Client Component로 세팅할 수 없다 !!!**

12버전의 _app, _document 파일을 대체한다.

migration guide : https://beta.nextjs.org/docs/upgrade-guide#create-the-app-directory-and-a-root-layout-required

<br>

#### Templates

템플릿은 각 하위 레이아웃 또는 페이지를 래핑한다는 점에서 레이아웃과 유사. 

레이아웃과 달리 경로 간에 상태를 유지하는 템플릿은 탐색 시 각 자식에 대해 새 인스턴스를 만든다.

DOM element를 재생성, 상태를 유지하지않고 효과는 re-synchronized한다.;

layout보다 적절할 경우가 있다.

- CSS 애니메이션이나 애니메이션 라이브러리를 시작, 종료할 때
- useEffect, useState에 의존하는 기능.
- 기본 프레임웤 동작을 바꿀때. 예로 Suspense Boundaries가 layout이 처음 로드될때만 보이고 페이지를 이동할땐 보이지 않게 할 때.

템플릿을 사용해야할 특별한 이유가 없다면 layout 사용을 권장함.

아래처럼 render된다.

```jsx
<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>
```

<br>

## head

앱 디렉토리에서 새로운 특수 head.js 파일을 사용하여 제목 및 메타와 같은 <head> HTML 요소를 수정할 수 있다.

<br>

## Linking and Navigating

Next.js 라우터는 `client-side navigation`과 함께 `server-centric routing`을 사용합니다.

즉각적인 로딩상태, 동시 렌더링을 지원한다. ;?

이것은 내비게이션이 클라이언트 측 상태를 유지하고 

비용이 많이 드는 재렌더링을 피하고 중단 가능하며 경합 상태를 일으키지 않는다는 것을 의미합니다.

<br>

#### routes 이동하는 2가지 방법

- <Link> Component
- useRouter Hook

<br>

## <Link> Component

### Linking to Dynamic Segments

app/blog/postList
이거 좀 더 봐야겠다. @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

https://beta.nextjs.org/docs/routing/linking-and-navigating