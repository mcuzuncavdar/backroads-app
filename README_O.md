# Backroads App

#### 51-52-53-54-55 SRC Boilerplate

-Yeni bir proje oluşturduk.
-Oluştururken => npx create-react-app@latest backroads-app
-Çalıştırırken => npm start
-Src içinde kalması gerekenler
-App.js
-index.css
-index.js
-Src'de bu dosyalar hariç hepsini sildik.

#### 56.Structure

-Smilga'nın klasörlerine kendi kurduğumuz backroads'a uyarladık.

-public => index.html => title satırına gidip React App'i değiştirmeyi unutma.

-Kullanacağın fontları yine index.html içine yapıştırabilirsin.

-Aynı kelimeyi seçmek istersek => cmd + d
-Buna her bastığımızda bir sonraki kelimeyi verir.
-İstediğimiz keliminenin hepsini seçmek istiyorsak => shift + cmd/control + l

#### 57.Components

-Smilga'nın verdiği html kodlarını tek tek componentlere ayırarak React'e çevirdik.

-Command + Option + =>/<= => Visual Studio Code'da sekmeler arası geçiş yapar.

#### 58.Nav Logo

-Navbar.js içine aşağıdaki satırı ekledik.
-import Logo from '../images/logo.svg'
-Logo'yu React mantığıyla ekledik.
-Eğer bulunduğumuz klasörden bir üst klasöre geçmek istiyorsak iki tane '..' koyuyoruz.

#### 59.Smooth Scroll

-React ile çalışıyor olmamız, her şey için JavaScript kullanmamız gerektiği anlamına gelmez.
-Sadece HTML, CSS'de React için kullanabileceğimiz özellikler var.
-Burada html'den React mantığı ile nav-link tarafını düzelttik.

#### 60.Page Links

-src'de data.js diye bir dosya oluşturduk.

```js
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
```

#### 61.Social Links

```js
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
```

-data.js'e bunları ekledik bunları da html ile değilde React mantığıyla ile map kullanarak 3 tane icon'a dağıttık.

-a tag'ine React'de rel="noreferrer" eklemeni ister. Aksi taktirde güvenlik sorunu olur.

#### 62.Hero and About Components

-Explore'da <h1>backroads app</h1> eklendi.
-Hero'da aşağıdaki değişiklikler yapıldı.

```js
import aboutImg from "../images/about.jpeg";
<img src={aboutImg} className="about-photo" alt="awesome beach" />;
```

#### 63.Title Component

-refce kısayoluyla bu gelir.
-rafce ile çok benzeri gelir.

```js
import React from "react";

function Title() {
  return <div>Title</div>;
}

export default Title;
```

-Bu Title.js'i başlıkların hepsine React ile uyarladık.

#### 64.Services Component

-Yeni datalar oluşturduk bu dataları map ile Services Component'ine yerleştirdik.

```js
export const servicesLink = [
  {
    id: 1,
    iconName: "fas fa-wallet fa-fw",
    titleName: "saving money",
    textName:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    iconName: "fas fa-tree fa-fw",
    titleName: "endless hiking",
    textName:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    iconName: "fas fa-socks fa-fw",
    titleName: "amazing comfort",
    textName:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
```

#### 65.Tours Component

#### 70.Continuous Deployment - Setup

-GitHub'a atmak için.
-git init
-git add .
-git commit -m "first commit"
-git remote add origin git@github.com:your-profile/repo-name.git
-git branch -M main
-git push -u origin main

#### 71.Continuous Deployment - Benefits

-Güncellemeleri GitHub'a atmak için.
-git add .
-git commit -m "message"
-git push -u origin main

#### 72.Continuous Deployment - "Gotcha"

-
