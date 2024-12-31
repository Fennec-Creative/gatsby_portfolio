exports.handler = async (event, context) => {
  // Log the incoming request for debugging
  console.log("Request method:", event.httpMethod);
  console.log("Request body:", event.body);

  // Verify the request method
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    let password;
    try {
      const body = JSON.parse(event.body);
      password = body.password;
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "Invalid request body" }),
      };
    }

    const correctPassword = process.env.PROTECTED_PAGE_PASS;

    if (!correctPassword) {
      console.error("Environment variable PROTECTED_PAGE_PASS not set");
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "Server configuration error" }),
      };
    }

    if (password === correctPassword) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "Access granted" }),
      };
    } else {
      return {
        statusCode: 401,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "Access denied" }),
      };
    }
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Server error" }),
    };
  }
};
