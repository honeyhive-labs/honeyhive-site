// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://honeyhive-labs.com',
  trailingSlash: 'never',
  // 디렉터리 대신 파일로 내보내야 Cloudflare Pages가 끝에 슬래시를 붙이지 않는다
  build: { format: 'file' },
});
