//
//  EmailStatusLabel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class EmailStatusLabel: PersonalInfoLabel {
    
    enum status: String {
        case unavaliable = "이메일 주소를 다시 확인해주세요."
        case available = "사용 가능한 아이디입니다."
        
        func message() -> String {
            return self.rawValue
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    func configure() {
        text = "status message"
        textColor = .clear
        NotificationCenter.default.addObserver(self, selector: #selector(handleStatusChanged), name: PersonalInfoViewModel.EmailStatusDidChangeNotification, object: nil)
    }
    
    @objc private func handleStatusChanged(notification: Notification) {
        guard let isValid = notification.userInfo?["isValid"] as? Bool else { return }
        let status: status = isValid ? .available : .unavaliable
        updateStatus(isValid: isValid, message: status.message())
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self, name: PersonalInfoViewModel.EmailStatusDidChangeNotification, object: nil)
    }
}
