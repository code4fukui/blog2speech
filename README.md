# blog2speech

Create a speech audio file from Taisuke Fukuno's blog.

## usage

Set the OpenAI API key in the .env file.

```sh
deno run -A blog2speech.js 4325 echo
```

## sample

- [echo](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_echo.mp3)
- [alloy](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_alloy.mp3)
- [echo](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_echo.mp3)
- [fable](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_fable.mp3)
- [onyx](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_onyx.mp3)
- [nova](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_nova.mp3)
- [shimmer](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_shimmer.mp3)

- [otoya by mac](https://code4fukui.github.io/blog2speech/fukuno_blog_4325_otoya.mp3)

## say

```sh
say -f 4325.txt -v Otoya -o temp.aac
ffmpeg -i temp.aac fukuno_blog_4325_otoya.mp3
```
