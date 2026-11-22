r=require
f=r('fs')
eval(''+r('zlib')
.brotliDecompressSync(f.readFileSync('/bot/z')))