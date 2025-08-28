const msg = process.env.VERCEL_GIT_COMMIT_MESSAGE || '';

if (/\[deploy\]/i.test(msg)) {
  console.log('Final commit: build allowed');
  process.exit(1); // 1 = Execute build
}

console.log('Skipping build for commit:', msg);
process.exit(0);   // 0 = Skip build