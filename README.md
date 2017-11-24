https://jkingsman.github.io/mead/

Image conversion:

```
mogrify -resize 25% -auto-orient *.jpg
ffmpeg -i "myvid.mp4" -pix_fmt rgb24 -r 10 -vf scale=256:-1 output.gif
```
