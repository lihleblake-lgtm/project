const NoResultsDiv = () => {
    return (
        <div className="no-results" style={{ textAlign: 'center', padding: '40px' }}>
            {/* You can use a material symbol for a "search off" or "error" look */}
            <span className="material-symbols-rounded" style={{ fontSize: '64px', color: 'rgba(255,255,255,0.7)' }}>search_off</span>
            <h3 style={{ color: 'white', marginTop: '10px' }}>City not found</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Please check the spelling or try a different city.</p>
        </div>
    );
};

export default NoResultsDiv;