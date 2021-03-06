package com.polling.config.web;

import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import java.util.concurrent.TimeUnit;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

@Configuration
public class WebClientConfig {

  private static final int TIMEOUT_TIME = 5_000;

  @Bean
  public WebClient webClient() {
    return WebClient.builder()
        .clientConnector(new ReactorClientHttpConnector(
            HttpClient.create()
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, TIMEOUT_TIME)
                .doOnConnected(connection -> connection.addHandler(
                    new ReadTimeoutHandler(TIMEOUT_TIME, TimeUnit.MILLISECONDS)))
        )).build();
  }
}
