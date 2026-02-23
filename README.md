<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/cc5da6c9-181d-44d8-9d14-c183ec106010

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Configure environment variables in `.env`:
   - `GROQ_API_KEY` for AI analysis/chat
   - `MONGODB_URI` (example: `mongodb://127.0.0.1:27017`)
   - Optional: `MONGODB_DB_NAME`, `MONGODB_HISTORY_COLLECTION`
3. Ensure MongoDB is running locally (or use MongoDB Atlas URI).
4. Run the app:
   `npm run dev`
