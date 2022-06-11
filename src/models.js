const TeamSchema = new mongoose.Schema({
    TeamA: String,
    TeamB: String,
    Matchtype: String,
    TournamentName: String,
    Start: String,
    End: String,
    MatchLocation: String,
    Comments: String
});

const College = mongoose.model("Team", TeamSchema);

export default College;