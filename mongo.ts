import { Collection, MongoClient } from "mongodb";

export interface AnalysisHistoryRecord {
  url: string;
  score: number;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  urlAnalysis: string;
  sslAnalysis: string;
  behaviorAnalysis: string;
  urlScore: number;
  sslScore: number;
  behaviorScore: number;
  verdict: string;
  domainAge: string;
  recommendations: string[];
  timestamp: number;
}

let cachedClient: MongoClient | null = null;

function getMongoConfig() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  const dbName = process.env.MONGODB_DB_NAME || "fake_url_risk_analyzer";
  const collectionName = process.env.MONGODB_HISTORY_COLLECTION || "analysis_history";

  return { uri, dbName, collectionName };
}

export async function getHistoryCollection(): Promise<Collection<AnalysisHistoryRecord>> {
  const { uri, dbName, collectionName } = getMongoConfig();

  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }

  return cachedClient.db(dbName).collection<AnalysisHistoryRecord>(collectionName);
}
