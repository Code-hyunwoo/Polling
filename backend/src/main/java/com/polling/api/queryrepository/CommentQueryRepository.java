package com.polling.api.queryrepository;

import com.polling.api.controller.candidate.dto.CommentDto;
import com.polling.api.controller.candidate.dto.response.FindCandidateResponseDto;

import java.util.List;

public interface CommentQueryRepository {
    List<CommentDto> findCommentByCandidateId(Long id);
}