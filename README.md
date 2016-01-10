# 專案摘要

![](https://dl.dropboxusercontent.com/u/45512449/2016-01-10_19-44-32.png)

## 專案簡介

近日在網路上讀到一篇名為：《Ionic and TypeScript》的 Blog 分享文。該文章介紹：「如何將原來 ES5 JavaScript 程式碼撰寫的 Ionic App ，改以 TypeScript 進行開發」。這篇分享文，不僅有文章、程式碼，更有 YouTube 影片。

**【參考來源】：**

 * [Blog 文章《Ionic and TypeScript》](http://blog.ionic.io/ionic-and-typescript-part-1/)
 * 示範影片
 
    [![示範影片](https://i.ytimg.com/vi_webp/kVegt2E72ww/default.webp)](https://www.youtube.com/watch?v=kVegt2E72ww)

看到這篇文章，非常興奮，立即遵循文章及影片中的示範，跟著實作。然結果，非常不順利。因為我實作的結果，總跟影片示範的結果，有著極大的出入。搞不清楚是否因為作者使用的： VSCode Editor  、TSLint Rules 、TypeScript Transpiler (tsc) 有著「版本」、「設定」的差異，以致我會有如此不幸地遭遇。

經過三天的卡關，及不斷地掙扎，最後終於能達成：「使用 TypeScript 改寫 Ionic App 」的心願。

將個人實作的成果分享，朌望提供一個確實、可用的參考，讓有志使用 TypeScript 在 Ionic 開發 App 的同好們，有個好的開始基礎！

## 開發環境

本專案於 Mac 電腦的 OS X 10.11.2 作業系統上進行。配合使用的「程式碼編輯器」及 NodeJS 與 NodeJS 模組，其版本詳述如下。

### 編輯器

 * VSCode (Vistual Studio Code) V0.10.6
 
 * VSCode Extenstion:
     - Angular 1 JavaScript and TypeScript Snippets V0.1.15
     - TSLint V0.5.4

### NodeJS 與模組

以下之 NodeJS 模組，均以 Global 方式安裝。

 * node V4.2.2
 * npm V2.14.7
 * ionic 1.7.12
 * cordova V5.4.1
 * typescript v1.7.5
 * tsd V0.6.5
 * tslint V3.2.1
 * gulp (CLI) V3.9.0

**【註】**：為使 VSCode 的程式編輯作業及 TSLint 的解譯（Inspect），能正確解讀，本專案停用了某些 TSLint Rule ，被停用的項目說明於文件底部的《需停用之 TSLint Rule》章節。

## 安裝及執行作業

對於本專案所提供的參考範例程式，請依以下所示之作業程序步驟進行安裝及執行工作。

 1. 自 GitHub 複製檔案

    ```
     $ git clone git@github.com:AlanJui/ionic1-typescript.git
    ```

 2. 安裝專案所需 NodeJS 模組、TypeScript 定義檔

    ```
     $ cd ionic1-typescript
     $ npm install
     $ tsd install
    ```

 3. 建置（Build）App

    ```
     $ gulp
    ```

 4. 在 Web 瀏覽器試行 App

    ```
     $ ionic serve
    ```

    以上的指令可啟動 App，請自 Web 瀏覽器檢視及操作，確認 App 能正常運作。

    URL網址： `http://localhost:8100`


## Ionic App 開發作業程序

對於有心想要 DIY ，從頭自己動手做的朋友，建議循此參考，按照以下的程序步驟進行。

### 建構專案並設定開發環境

 1. 建立 Ionic 專案

    ```
    $ ionic start myApp tabs
    ```

 2. 進入專案的目錄

    ```
    $ cd myApp
    ```

 3. 安裝專案所需的 NodeJS 模組

    ```
     $ npm install
    ```

 4. 建置（Build）App 

    ```
     $ gulp
    ```

 5. 在 Web 瀏覽器試行 App 

    ```
      $ ionic serve
    ```

    以上的指令，完成 App 啟動後，可在 Web 瀏覽器檢視及操作，確認 App 能正常運作。

    URL網址： `http://localhost:8100`

    確認無誤後，在「終端機」按 《Ctrl + C》 終止 ionic serve 指令。


### 建置 src 目錄

建立 src 目錄，用以存放 .ts (TypeScript) 原始程式碼檔案。

 1. 建立存放原始程式碼所需目錄

    ```
     $ mkdir src
    ```

 2. 以「複製方法」產生原始程式碼檔案 (.ts 檔案）

    ```
     $ cp www/js/app.js src/app.ts
     $ cp www/js/controllers.js src/controllers.ts
     $ cp www/js/services.js src/services.ts
    ```

### 安裝及設定 TypeScript 編譯工具

為令 VSCode 能透過 TSLint 正確解譯 TypeScript 原始程式碼，使程式碼編輯的過程可以順利進行，不會被無謂的程式碼編輯錯誤所干擾。

  1. 安裝 TypeScript 定義檔（Declaration File）

    ```
      $ tsd install --save ionic cordova cordova-ionic angular-ui-router
    ```

  2. 複製 TSLint 解譯所需的「規則」檔案

    編檔案到專案的根目錄： `tslint.json` ，供 tslint 使用。

  3. 複製 TypeScript 編譯所需的檔案

    複製檔案到專案的根目錄： `tsconfig.json` ，供 tsc 使用。

### 為 Gulp 新增編譯用 Task  

以及能使用 Gulp 翻譯執行時所需的 ES5 JavaScript ，及產生 Debug 使需使用的 Source Map 檔案。

  1. 安裝 TypeScript 定義檔（Declaration File）

    ```
      $ npm install --save-dev gulp-tsc gulp-typescript gulp-sourcemaps
    ```

  2. 修訂 gulpfile.js 檔案，新增與 TypeScript 編譯相關的 Task 。
 
     可直接複製本處之 gulpfile 檔案。

### App 程式開發

完成以上作業後，在依循以下
  
 1. 建置（Build）App

    ```
    $ gulp
    ```

 2. 啟動 Ionic Serve

    ```
    $ ionic serve
    ```
   
 3. 使用 VSCode 編輯原始程式碼。

![](https://dl.dropboxusercontent.com/u/45512449/2016-01-10_20-09-56.png)

## 需停用之 TSLint Rule

為使 VSCode 的程式編輯作業及 TSLint 的解譯（Inspect），能正確解讀 TypeScript 原始程式碼，本專案對預設的「規則定義檔」： `tslint.json` 做了修訂，停用某些 TSLint Rule。

被停用的 TSLint Rule 項目，條列如下：

 * no-constructor-vars
 * no-internal-module
 * radix
 * typedef / call-signature
 * typedef / member-variable-declarattion
 * typedef / parameter
 * typedef / property-declaration
 * typedef / variable-declaration
 * variable-name / check-format
 
--------------------------------------------------------------------------

【解譯錯誤訊息】：
forbidden internal module  

〔導因〕：==> `no-internal-module` : true

--------------------------------------------------------------------------

【解譯錯誤訊息】：
expected call-signature: 'all' to have a typedef

〔導因〕：==> `typedef / call-signature` : true

--------------------------------------------------------------------------

【解譯錯誤訊息】：
expected parameter: 'chat' to have a typedef

〔導因〕：==> `typedef / parameter` : true

--------------------------------------------------------------------------

【解譯錯誤訊息】：
expected variable-declaration: 'i' to have a typedef let i: number

〔導因〕：==> `variable-declaration` : true

--------------------------------------------------------------------------

【解譯錯誤訊息】：
missing radix parameter 
Connverts A string to an integer.
function parseInt(s: string, radix?: number): number 

〔導因〕：==> `radix` : true

--------------------------------------------------------------------------

【解譯錯誤訊息】：
expected member-variable-declaration: '$inject' to have a typedef (property) 

〔導因〕：==> `typedef / member-variable-declarattion` : true

--------------------------------------------------------------------------

【解譯錯誤訊息】：
'ChatsService' cannot be declared in the constructor

〔導因〕：==> `no-constructor-vars` : true

--------------------------------------------------------------------------

【解譯錯誤訊息】：
variable name must be in camelcase or uppercase (property) ChatsCtrl.ChatsService: any

〔導因〕：==> `variable-name / check-format` : true

--------------------------------------------------------------------------











