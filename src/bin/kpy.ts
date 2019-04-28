#!/usr/bin/env node

import { kpyCommand } from '../kpy'

kpyCommand().catch(err => {
  console.error(err)
  process.exit(1)
})
