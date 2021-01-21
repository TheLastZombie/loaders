import { existsSync, ensureDirSync } from 'https://deno.land/std@0.84.0/fs/mod.ts'
import { basename, extname, resolve } from 'https://deno.land/std@0.84.0/path/mod.ts'

export function directory (name: string, silent = false): void {
  name = sanitize(name)

  if (existsSync(name)) {
    if (silent) {
      Deno.chdir(name)
    } else {
      throw Error('Directory "' + name + '" already exists!')
    }
  } else {
    ensureDirSync(name)
    Deno.chdir(name)
  }
}

export async function download (url: string, file: string = basename(url), dir = '.', sane = true): Promise<void> {
  if (sane) {
    file = sanitize(file)
    dir = sanitize(dir)
  }
  file = resolve(dir, file)

  directory(dir, true)

  try {
    Deno.writeFileSync(file, await request(url, undefined, undefined, true))
  } catch (e) {
    console.log('Fetch error, skipping download.')
  }
}

export function extension (file = ''): string {
  return extname(file)
}

export async function request (url: string, json = false, headers: Record<string, string> = {}, array = false): Promise<any> {
  const response = await fetch(url, {
    headers: headers
  })

  if (json) {
    return await response.json()
  } else if (array) {
    return new Uint8Array(await response.arrayBuffer())
  } else {
    return await response.text()
  }
}

export function sanitize (input: string, replacement = '_'): string {
  return input.replace(/[\\/:*?"<>|]/g, replacement)
}
