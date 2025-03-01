// Voice recognition and synthesis handler
class VoiceHandler {
    constructor(wakeWord, onWakeDetected, onSpeechResult) {
        this.wakeWord = wakeWord.toLowerCase();
        this.onWakeDetected = onWakeDetected;
        this.onSpeechResult = onSpeechResult;
        this.recognition = null;
        this.isListening = false;
        this.isContinuousListening = false;
        this.synthesis = window.speechSynthesis;
        
        // Check for browser support
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.error('Speech recognition not supported in this browser');
            return;
        }
        
        // Initialize speech recognition
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        
        // Set up event handlers
        this.setupRecognitionEvents();
    }
    
    setupRecognitionEvents() {
        // Handle results
        this.recognition.onresult = (event) => {
            let finalTranscript = '';
            let interimTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript.trim().toLowerCase();
                
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                    
                    // Check for wake word if not in continuous listening mode
                    if (!this.isContinuousListening && finalTranscript.includes(this.wakeWord)) {
                        this.onWakeDetected();
                        // Start active listening mode
                        this.startContinuousListening();// Voice recognition and synthesis handler
class VoiceHandler {
    constructor(wakeWord, onWakeDetected, onSpeechResult) {
        this.wakeWord = wakeWord.toLowerCase();
        this.onWakeDetected = onWakeDetected;
        this.onSpeechResult = onSpeechResult;
        this.recognition = null;
        this.isListening = false;
        this.isContinuousListening = false;
        this.synthesis = window.speechSynthesis;
        
        // Check for browser support
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.error('Speech recognition not supported in this browser');
            return;
        }
        
        // Initialize speech recognition
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        
        // Set up event handlers
        this.setupRecognitionEvents();
    }
    
    setupRecognitionEvents() {
        // Handle results
        this.recognition.onresult = (event) => {
            let finalTranscript = '';
            let interimTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript.trim().toLowerCase();
                
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                    
                    // Check for wake word if not in continuous listening mode
                    if (!this.isContinuousListening && finalTranscript.includes(this.wakeWord)) {
                        this.onWakeDetected();
                        // Start active listening mode
                        this.startContinuousListening();