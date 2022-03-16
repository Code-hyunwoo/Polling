package com.polling.api.queryrepository;

import com.polling.api.controller.candidate.dto.response.FindVoteHistoryResponseDto;

import java.util.List;

public interface CandidateHistoryQueryRepository {
    List<FindVoteHistoryResponseDto> findVoteHistoryByCandidateId(Long id);
}