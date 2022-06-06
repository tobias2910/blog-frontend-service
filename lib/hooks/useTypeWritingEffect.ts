import { useEffect, useState, useReducer } from 'react';

/* ************************************************* */
/* ******** Reducer function for typing ************ */
/* ************************************************* */

enum TypingActions {
  TYPE = 'TYPE',
  DELETE = 'DELETE',
}

interface TypingAction {
  type: TypingActions,
  payload: string,
}

const typingReducer = (typingState: string, action: TypingAction) => {
  switch (action.type) {
    case TypingActions.TYPE: {
      return action.payload.slice(0, typingState.length + 1);
    }
    default: {
      return action.payload.slice(0, typingState.length - 1);
    }
  }
};

/* ************************************************* */
/* ******* Custom hook for the typing effect ******* */
/* ************************************************* */

export enum EventStatus {
  Typing = 'TYPING',
  Pausing = 'PAUSING',
  Deleting = 'DELETING',
  Stopped = 'Stopped',
}

interface TypeWriteResult {
  typedWord: string,
  eventStatus: string,
  currentWord: string,
}

/**
 * Creates a typing writing effect by writing the provided word list
 * character by character with the provided intervals between.
 *
 * @param {string[]} wordList - List of words that should be used
 * @param {number} typingInterval - The interval of typing to use
 * @param {number} deletingInterval - The interval to delete characters
 * @param {number} pausingDuration - The pause between the switch of words
 * @returns {TypeWriteResult} - Object than contains the current state of the typing effect
 */
const useTypeWritingEffect = (
  wordList: string[],
  typingInterval: number,
  deletingInterval: number,
  pausingDuration: number,
  infinite: boolean = true,
): TypeWriteResult => {
  const [typedWord, dispatch] = useReducer(typingReducer, '');
  const [eventStatus, setEventStatus] = useState(EventStatus.Typing);
  const [wordListIndex, setWordListIndex] = useState(0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    switch (eventStatus) {
      case EventStatus.Typing: {
        const typingTimeout = setTimeout(() => {
          dispatch({ type: TypingActions.TYPE, payload: wordList[wordListIndex] });
        }, typingInterval);

        if (typedWord === wordList[wordListIndex]) setEventStatus(EventStatus.Pausing);

        return () => clearTimeout(typingTimeout);
      }
      case EventStatus.Deleting: {
        const deletingTimeout = setTimeout(() => {
          dispatch({ type: TypingActions.DELETE, payload: typedWord });
        }, deletingInterval);

        if (typedWord.length === 0) {
          setEventStatus(EventStatus.Typing);
          setWordListIndex((idx) => (idx === wordList.length - 1 ? 0 : idx + 1));
        }

        return () => clearTimeout(deletingTimeout);
      }
      case EventStatus.Stopped: {
        break;
      }
      default: {
        const pauseTimeout = setTimeout(() => {
          setEventStatus(EventStatus.Deleting);
        }, pausingDuration);

        if (wordListIndex === wordList.length - 1 && !infinite) setEventStatus(EventStatus.Stopped);

        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [eventStatus, wordList, typedWord]);

  return {
    typedWord,
    eventStatus,
    currentWord: wordList[wordListIndex],
  };
};

export default useTypeWritingEffect;
