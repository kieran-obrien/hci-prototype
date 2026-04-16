import { Link } from "react-router-dom";
import { useState } from "react";

export default function GameScreen() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <nav className="space-x-2">
          <Link to="/settings" className="btn btn-accent w-20">
            Settings
          </Link>
          <Link to="/" className="btn btn-accent w-20">
            Quit
          </Link>
        </nav>
      </div>

      <div className="card bg-base-100 shadow-md p-4 h-[700px]">
        <div className="p-6 text-center opacity-70">
          Gameplay area (prototype)
        </div>
      </div>

      {/* sliding phone console (bottom-right) */}
      <button
        className="console-toggle btn btn-accent btn-round"
        aria-expanded={showChat}
        aria-controls="game-console"
        onClick={() => setShowChat((s) => !s)}
        title={showChat ? "Hide console" : "Open console"}
      >
        {showChat ? "×" : "Chat"}
      </button>

      <div
        id="game-console"
        className={`console-panel ${showChat ? "console-visible" : "console-hidden"}`}
      >
        <div className="mockup-phone w-[220px] h-[480px] custom-phone">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display p-2">
            <div className="bg-base-200 w-full h-full rounded-lg overflow-auto p-3">
              <div className="space-y-4">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Game controller avatar" src="/image.png" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Central Controller
                    <time className="text-xs opacity-50"> 12:45</time>
                  </div>
                  <div className="chat-bubble">Tuning in...</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>

                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Player avatar" src="/louis.png" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Louis
                    <time className="text-xs opacity-50"> 12:46</time>
                  </div>
                  <div className="chat-bubble">Aliens huh?</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>

                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Game controller avatar" src="/image.png" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Central Controller
                    <time className="text-xs opacity-50"> 12:47</time>
                  </div>
                  <div className="chat-bubble">This is Central Control!</div>
                  <div className="chat-footer opacity-50">Seen at 12:49</div>
                </div>

                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Player avatar" src="/louis.png" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Louis
                    <time className="text-xs opacity-50"> 12:46</time>
                  </div>
                  <div className="chat-bubble">Jeezy peeps man.</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>

                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Game controller avatar" src="/image.png" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Central Controller
                    <time className="text-xs opacity-50"> 12:47</time>
                  </div>
                  <div className="chat-bubble">This is Central Control!</div>
                  <div className="chat-footer opacity-50">Seen at 12:49</div>
                </div>

                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Player avatar" src="/louis.png" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Louis
                    <time className="text-xs opacity-50"> 12:46</time>
                  </div>
                  <div className="chat-bubble">Aliens huh?</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>

                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Game controller avatar" src="/image.png" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Central Controller
                    <time className="text-xs opacity-50"> 12:47</time>
                  </div>
                  <div className="chat-bubble">This is Central Control!</div>
                  <div className="chat-footer opacity-50">Seen at 12:49</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="btn btn-small btn-round btn-accent align-middle fixed bottom-4 left-4 opacity-90">?</div>
    </div>

  );
}
