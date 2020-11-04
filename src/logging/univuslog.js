import loggingjs from "./logging";

// TODO: Add ui and task as params

// Log the start of a task
export const logStart = (participantID, extraInfo) => {
  loggingjs.logEvent(null, 'start', 
    {
      eventName: 'start',
      info: {
        'participantid': participantID,
        'ui': extraInfo.ui || '',
        'task': extraInfo.task || '',
        ...extraInfo
      }
    });
};

// Log the end of a task
export const logEnd = (participantID, extraInfo) => {
  loggingjs.logEvent(null, 'end', 
    {
      eventName: 'end',
      info: {
        'participantid': participantID,
        'ui': extraInfo.ui || '',
        'task': extraInfo.task || '',
        ...extraInfo
      }
    });
};

/////////////////////////////////////////////////////////////////////////////
// Below here is unused for now
// We use loggingjs low-level event handler for mousepress & keypress instead
/////////////////////////////////////////////////////////////////////////////

// Log tap events e.g. clicks of a button
export const logClick = (participantID, extraInfo) => {
  loggingjs.logEvent(null, 'mousepress', 
    {
      eventName: 'mousepress',
      info: {
        'participantid': participantID,
        'ui': extraInfo.ui || '',
        'task': extraInfo.task || '',
        ...extraInfo
      }
    });
};

// Log typing on a keyboard e.g. editing a textbox
export const logKeypress = (participantID, extraInfo) => {
  loggingjs.logEvent(null, 'keypress', 
    {
      eventName: 'keypress',
      info: {
        'participantid': participantID,
        'ui': extraInfo.ui || '',
        'task': extraInfo.task || '',
        ...extraInfo
      }
    });
};
