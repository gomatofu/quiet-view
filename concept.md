# Quiet View ― 最小設計書 ＋ Figma MCP 連携フロー（コピペで使えるワンシート）

| 項目 | 内容 |
|------|------|
| **目的** | 6 都市ライブカメラ × “静けさ” を伝えるシングルページ |
| **ブランド名** | Quiet View |
| **技術スタック** | - Next.js 13+ (App Router) 1ルートのみ<br>- TypeScript<br>- Tailwind CSS (zinc系ダーク・ミニマル)<br>- shadcn/ui (Toggle / Card / Typography) |
| **セットアップ** | ```bash<br>npx create-next-app@latest quietview --app --typescript --tailwind --eslint<br>cd quietview<br># shadcn/ui<br>npx shadcn-ui@latest init # テーマ＝zinc<br>npx shadcn-ui@latest add toggle card tooltip<br>``` |
| **Figma MCP 連携** | **1) 依存追加**<br>```bash<br>npm i -D @figma-export/cli figma-tokens<br>```<br>**2) 環境変数**<br>`.env.local` に `FIGMA_TOKEN=★APIキー★`<br>**3) アセット抽出**<br>```bash<br>npx figma-export output react --file-id ★FileID★ --output ./components/figma<br>```<br>**4) デザイントークン同期**<br>```bash<br>npx figma-tokens pull -o ./tokens --file ★FileID★<br>npx figma-tokens transform -f tailwind<br>```<br>**5) `tailwind.config.ts` に `tailwind.tokens.cjs` をextendで読み込む** |
| **ディレクトリ構成（最小）** | ```text<br>app/<br>  layout.tsx        # meta, OGP, GA4<br>  page.tsx          # メインビュー<br>components/<br>  figma/             # Figma由来のReactパーツ<br>  LiveGrid.tsx       # 6都市 + iframe<br>  LoFiToggle.tsx<br>  Clock.tsx<br>  FooterPoem.tsx<br>public/<br>  favicon.png<br>  og.jpg<br>  robots.txt / sitemap.xml<br>tokens/<br>  global.json        # Tokens Studio 原本<br>``` |
| **UI 要素** | - タイトル: **Quiet View** + サブタイトル *Watch the world in real-time*<br>- LiveGrid: Card×6（都市名＋現地時間）<br>- Lo-Fi Toggle: 右上、audio APIで再生／停止<br>- ステータス: 小ドット (green/red) *optional*<br>- 詩的コピー:<br> Six windows. One quiet world.<br> Watch the present moment unfold across cities.<br> With gentle music. No distractions. Just now. |
| **メタ／SEO** | `app/layout.tsx` の `metadata` に記述：<br>- `title`: Quiet View — Six quiet windows to the world<br>- `description`: A quiet place to watch cities live.<br>- `og:image`: `/og.jpg` (1200×630)<br>- `twitter:card`: `summary_large_image` |
| **静的ファイル** | - `favicon.png` (32×32)<br>- `og.jpg`: 黒背景に “Quiet View” のみ記載 |
| **解析／公開** | - GA4トラッキングコードを `<Head>` に埋め込み<br>- ドメイン例: `quietview.app` / `quietview.world`<br>- Vercel でデプロイ → サーチコンソール登録 |
| **拡張余白** | - shimmer ローディング演出<br>- WebSocket/HLS によるライブ品質チェック<br>- 日時に応じた都市自動切替 など |
