type CrispCommand = ['set', 'session:data', Array<[string, string]>];

interface Window {
  $crisp?: {
    config: () => void;
    do: () => void;
    get: () => void;
    help: () => void;
    is: () => void;
    off: () => void;
    on: () => void;
    push: (command: CrispCommand) => void;
    safe: () => void;
    set: () => void;
  };
  CLUTCHCO?: {
    Init: () => void;
  };
}
