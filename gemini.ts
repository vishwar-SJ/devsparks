// Gemini AI integration disabled.
// The original implementation required an API key and made runtime calls to
// Google's Generative AI service. That API key may be invalid or unavailable
// in this environment which caused runtime failures.
//
// To avoid crashes and to let the app run without an external AI key, we
// provide a simple fallback function here. This keeps the `ChatBot` and any
// callers working but returns a clear message that the AI is disabled.

export const getGeminiResponse = async (prompt: string) => {
  console.warn('[gemini] Gemini integration is disabled. Returning fallback response.');
  // Return a helpful but non-sensitive fallback so UI remains usable.
  return `Gemini is currently disabled. You asked: "${prompt}". This feature has been temporarily turned off.`;
};