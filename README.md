# Translate Server

Dedicated backend server that uses DeepL API to translate text from one language into another. 

> 🚀 [translate-server-ten.vercel.app](https://translate-server-ten.vercel.app/) hosts a public instance of the API.
<br />

### 📍 Endpoints

[POST] Translate text

```
https://translate-server-ten.vercel.app/translate
```
Body (JSON):
```
{
  "text": "Hello, world!",
  "targetLang": "FR"
}
```
