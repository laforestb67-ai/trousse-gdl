const Anthropic = require("@anthropic-ai/sdk");

exports.handler = async (event) => {
  console.log("🔵 chat-api function called");
  console.log("Method:", event.httpMethod);

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }), headers: { "Content-Type": "application/json" } };
  }

  try {
    const { messages, model, system } = JSON.parse(event.body);

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key not configured" }),
        headers: { "Content-Type": "application/json" },
      };
    }

    const client = new Anthropic({
      apiKey: apiKey,
    });

    const response = await client.messages.create({
      model: model || "claude-opus-4-6",
      max_tokens: 1500,
      system: system,
      messages: messages,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: response.id,
        content: response.content,
        model: response.model,
        stop_reason: response.stop_reason,
        usage: response.usage,
      }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (error) {
    console.error("Error in chat-api function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal server error" }),
      headers: { "Content-Type": "application/json" },
    };
  }
};
