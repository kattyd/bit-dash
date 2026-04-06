export const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor(Date.now() / 1000 - timestamp);
    if (seconds < 60) return `${seconds} secs`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min${minutes > 1 ? 's' : ''}`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hr${hours > 1 ? 's' : ''}`;
};