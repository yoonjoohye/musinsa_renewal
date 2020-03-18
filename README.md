# Musinsa Renewal

> 무신사 스토어 메인화면 UI/UX 리뉴얼 개발

> [설문조사] (https://forms.gle/H8fX6aeA2DSmu4nK8)를 기반으로 제작

Skills
---
> Nuxt.js + TailwindCSS + lazy-loading

Setup
---
``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

왜 만들었는가?
---
![image](https://user-images.githubusercontent.com/26542929/75114792-7b324380-569c-11ea-8ab3-586f07ce08fa.png)
처음 무신사 스토어를 이용할때 기능이 많아 레이아웃 적응이 쉽지 않았다.

그래서 '무신사를 한번 개선해보자!'라는 생각을 했다.

무신사 서비스를 개선하기 위해 어떤 점이 문제인지 알아야했다.

그래서 구글폼에 무신사 서비스 사용에 대한 설문지를 작성했다.

총 21명에게 응답 받았고, 결과는 사이트 속도와 UI/UX에 의해 상품을 찾기 어렵다는 것이 문제였다.


어떻게 개선했는가?
---

![image](https://user-images.githubusercontent.com/26542929/75114794-808f8e00-569c-11ea-808f-bb8893d6ae6b.png)
![image](https://user-images.githubusercontent.com/26542929/75114790-74a3cc00-569c-11ea-8cb8-4a0dde9956c8.png)

사용자들이 상품을 잘 찾도록 만드는 것이 목적이었기 때문에 UI/UX는 위 사진처럼 개선했다.

목적에 집중하고자 최대한 기능을 간소화해봤다.

햄버거 버튼을 클릭하면 전체 메뉴를 볼 수 있도록 했다.

상품을 찾기 위해서는 사용자가 검색을 많이 이용할 것이라 생각하여, 검색창을 크게 만들었다.

세일 상품, 랭킹 상품, 무신사 추천 등 상품이 사용자 눈에 많이 띌 수 있는 위주로 배치했다.

무신사의 신규 입점한 브랜드를 보여주면서 사용자가 다양한 브랜드를 접할 수 있도록 배치했다.

쇼핑이슈, 기획전 등 사용자가 알아야하는 소식을 한 눈에 볼 수 있게 스와이핑 되는 배너로 만들었다.

vue와 nuxt.js를 사용하고, Lazy-loading을 적용하여 사이트 속도를 개선하려고 노력했다.
