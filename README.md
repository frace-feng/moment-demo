# moment-demo



## 报错：  Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"
解决方法：
```bash
解决方法：
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write  # 添加写入权限
```bash`
增加写入权限