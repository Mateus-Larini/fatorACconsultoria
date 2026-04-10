(function () {
  var endpoint = "https://fluxos.concretousinadomaringa.com.br/webhook/AGENTEFATORAC";
  var sessionStorageKey = "willChatSessionId";
  var widgetId = "will-chat-root";
  var initialMessage = "Ol\u00e1! Eu sou o Will. Posso fazer uma estimativa r\u00e1pida de quanto dinheiro voc\u00ea pode economizar na concretagem da sua obra. Para \u00e9 começar, como é seu nome ?";

  function generateSessionId() {
    return "will-" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  function getSessionId() {
    var existingSessionId = window.localStorage.getItem(sessionStorageKey);

    if (existingSessionId) {
      return existingSessionId;
    }

    var nextSessionId = generateSessionId();
    window.localStorage.setItem(sessionStorageKey, nextSessionId);
    return nextSessionId;
  }

  function createWidgetMarkup() {
    return [
      '<button class="will-chat-launcher" type="button" aria-label="Abrir chat do Will">',
      '  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">',
      '    <path d="M7 10.5H17M7 14H13.4M12 3C17.523 3 22 6.806 22 11.5C22 16.194 17.523 20 12 20C10.53 20 9.135 19.73 7.868 19.243L3 21L4.563 16.906C3.594 15.402 3 13.522 3 11.5C3 6.806 7.477 3 12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
      '  </svg>',
      '</button>',
      '<section class="will-chat-panel" aria-label="Chat com Will" aria-live="polite">',
      '  <header class="will-chat-header">',
      '    <div class="will-chat-heading">',
      '      <h2 class="will-chat-title">Will - Especialista Fator AC</h2>',
      '      <p class="will-chat-subtitle">C\u00e1lculo de Economia</p>',
      '    </div>',
      '    <button class="will-chat-close" type="button" aria-label="Fechar chat">',
      '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">',
      '        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
      '      </svg>',
      '    </button>',
      '  </header>',
      '  <div class="will-chat-messages" data-will-chat-messages></div>',
      '  <div class="will-chat-composer">',
      '    <form class="will-chat-form" novalidate>',
      '      <input class="will-chat-input" type="text" placeholder="Digite aqui..." autocomplete="off" />',
      '      <button class="will-chat-send" type="submit" aria-label="Enviar mensagem">',
      '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">',
      '          <path d="M21 3L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      '          <path d="M21 3L14 21L10 14L3 10L21 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      '        </svg>',
      '      </button>',
      '    </form>',
      '  </div>',
      '</section>'
    ].join("");
  }

  function appendMessage(messagesContainer, role, text) {
    var row = document.createElement("div");
    var bubble = document.createElement("div");

    row.className = "will-chat-row will-chat-row--" + role;
    bubble.className = "will-chat-bubble will-chat-bubble--" + role;
    bubble.textContent = text;

    row.appendChild(bubble);
    messagesContainer.appendChild(row);
    scrollMessages(messagesContainer);
  }

  function createTypingIndicator(messagesContainer) {
    var row = document.createElement("div");
    row.className = "will-chat-row will-chat-row--bot";
    row.setAttribute("data-will-chat-typing", "true");
    row.innerHTML = [
      '<div class="will-chat-bubble will-chat-bubble--bot">',
      '  <div class="will-chat-typing">',
      '    <span>Will est\u00e1 calculando...</span>',
      '    <span class="will-chat-typing-dots" aria-hidden="true">',
      '      <span></span><span></span><span></span>',
      '    </span>',
      '  </div>',
      '</div>'
    ].join("");

    messagesContainer.appendChild(row);
    scrollMessages(messagesContainer);
    return row;
  }

  function scrollMessages(messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function normalizeReply(payload) {
    if (!payload) {
      return "N\u00e3o consegui calcular agora. Tente novamente em alguns instantes.";
    }

    if (typeof payload.reply === "string" && payload.reply.trim()) {
      return payload.reply.trim();
    }

    if (Array.isArray(payload) && payload[0] && typeof payload[0].reply === "string") {
      return payload[0].reply.trim();
    }

    if (payload.data && typeof payload.data.reply === "string") {
      return payload.data.reply.trim();
    }

    return "Recebi sua mensagem, mas a resposta veio em um formato inesperado.";
  }

  async function sendMessage(options) {
    var message = options.message;
    var messagesContainer = options.messagesContainer;
    var input = options.input;
    var submitButton = options.submitButton;
    var payload = {
      message: message,
      sessionId: getSessionId(),
      timestamp: new Date().toISOString(),
      source: "site"
    };
    var typingIndicator = createTypingIndicator(messagesContainer);

    input.disabled = true;
    submitButton.disabled = true;

    try {
      if (window.console && typeof window.console.log === "function") {
        window.console.log("Enviando para webhook:", payload);
      }

      var response = await window.fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }

      var responsePayload = await response.json();
      typingIndicator.remove();
      appendMessage(messagesContainer, "bot", normalizeReply(responsePayload));
    } catch (error) {
      typingIndicator.remove();
      appendMessage(messagesContainer, "bot", "N\u00e3o consegui concluir o c\u00e1lculo agora. Tente novamente em alguns instantes.");
      if (window.console && typeof window.console.error === "function") {
        window.console.error("Erro ao enviar para webhook:", error);
      }
    } finally {
      input.disabled = false;
      submitButton.disabled = false;
      input.focus();
    }
  }

  function handleSubmit(options) {
    var input = options.input;
    var message = input.value.trim();

    if (!message) {
      input.focus();
      return;
    }

    appendMessage(options.messagesContainer, "user", message);
    input.value = "";

    void sendMessage({
      message: message,
      messagesContainer: options.messagesContainer,
      input: input,
      submitButton: options.submitButton
    });
  }

  function openWidget(root, input, messagesContainer) {
    root.classList.add("will-chat-open");
    window.requestAnimationFrame(function () {
      input.focus();
      scrollMessages(messagesContainer);
    });
  }

  function closeWidget(root) {
    root.classList.remove("will-chat-open");
  }

  function mountWidget() {
    if (document.getElementById(widgetId)) {
      return;
    }

    getSessionId();

    var root = document.createElement("div");
    root.className = "will-chat-root";
    root.id = widgetId;
    root.innerHTML = createWidgetMarkup();

    document.body.appendChild(root);

    var launcher = root.querySelector(".will-chat-launcher");
    var closeButton = root.querySelector(".will-chat-close");
    var form = root.querySelector(".will-chat-form");
    var input = root.querySelector(".will-chat-input");
    var submitButton = root.querySelector(".will-chat-send");
    var messagesContainer = root.querySelector("[data-will-chat-messages]");

    appendMessage(messagesContainer, "bot", initialMessage);

    launcher.addEventListener("click", function () {
      openWidget(root, input, messagesContainer);
    });

    closeButton.addEventListener("click", function () {
      closeWidget(root);
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (event.submitter && event.submitter === submitButton) {
        return;
      }

      handleSubmit({
        messagesContainer: messagesContainer,
        input: input,
        submitButton: submitButton
      });
    });

    submitButton.addEventListener("click", function (event) {
      event.preventDefault();

      handleSubmit({
        messagesContainer: messagesContainer,
        input: input,
        submitButton: submitButton
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && root.classList.contains("will-chat-open")) {
        closeWidget(root);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountWidget, { once: true });
  } else {
    mountWidget();
  }
})();