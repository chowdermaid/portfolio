import {
  useState,
  useMemo,
  createContext,
  useContext,
  FC,
  ReactNode,
} from "react";

interface GlobalContextProps {
  children: ReactNode;
}
const GlobalContext = createContext<any>(undefined);

export const GlobalProvider: FC<GlobalContextProps> = ({ children }) => {
  const [log, setLog] = useState<any>([]);
  const [msgLogOpen, setMsgLogOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [vertical, setVertical] = useState<string>("bottom");
  const [horizontal, setHorizontal] = useState<string>("right");
  const [severity, setSeverity] = useState<string>();
  const [popupMsg, setPopupMsg] = useState<string>("");

  const openPopup = (
    msg: string,
    severity: string,
    vertical: string,
    horizontal: string
  ) => {
    setOpen(true);
    setPopupMsg(msg);
    setSeverity(severity);
    setVertical(vertical);
    setHorizontal(horizontal);
  };

  const clearLog = () => {
    setLog([]);
  };

  const handleMsgLogOpen = () => {
    setMsgLogOpen((prev) => !prev);
  };

  const subscribeToLog = (
    data: any,
    error: any,
    action: string,
    type: string
  ) => {
    let status;
    let statusText;

    if (data) {
      status = 200;
      statusText = "OK";
      switch (type) {
        case "ADDED": {
          openPopup(`Added ${data} to ${action}`, "success", "bottom", "right");
          break;
        }
        case "DELETED": {
          openPopup(
            `Deleted ${data} from ${action}`,
            "success",
            "bottom",
            "right"
          );
          break;
        }
        case "MODIFIED": {
          openPopup(
            `Modified ${data} in ${action}`,
            "success",
            "bottom",
            "right"
          );
          break;
        }
        case "CUSTOM": {
          openPopup(`${action}`, "success", "bottom", "right");
          break;
        }
        default: {
          break;
        }
      }
    } else {
      status = error?.response?.status;
      statusText = error?.response?.data?.detail;
      openPopup(`Error: ${status} - ${statusText}`, "error", "bottom", "right");
    }
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const obj = {
      data,
      error,
      action,
      time,
      status,
      statusText,
      type,
    };
    setLog((old: any) => [...old, obj]);
  };

  const handlePopupClose = () => {
    setOpen(false);
  };

  const clientViewWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  const clientViewHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  const value = useMemo(
    () => ({
      log,
      setLog,
      handleMsgLogOpen,
      msgLogOpen,
      clearLog,
      subscribeToLog,
      open,
      vertical,
      horizontal,
      severity,
      popupMsg,
      openPopup,
      handlePopupClose,
      clientViewWidth,
      clientViewHeight,
    }),
    [
      log,
      setLog,
      handleMsgLogOpen,
      msgLogOpen,
      clearLog,
      subscribeToLog,
      open,
      vertical,
      horizontal,
      severity,
      popupMsg,
      openPopup,
      handlePopupClose,
      clientViewWidth,
      clientViewHeight,
    ]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
