// Replace this line:
setUser({ id: userCredential.userId, email: userCredential.email ?? undefined });

// With this line:
setUser({ id: userCredential.userId, email: userCredential.email || undefined });
